import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Rnd } from 'react-rnd';
import "./email.css";
import { BsInbox, BsShieldFill } from 'react-icons/bs';

class EmailWidget extends React.Component {
    // State
    constructor() {
        // Call parent constructor
        super()

        // Set initial state
        this.state = {
            box: 'Primary', // Primary, Social, Promotions, Updates, Forums, All
            unread: true, // Read, Unread
            emails: []
        };

        // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
        this.getEmails = this.getEmails.bind(this);
        this.updateEmailConfig = this.updateEmailConfig.bind(this);
        this.updateBox = this.updateBox.bind(this)
        this.updateUnread = this.updateUnread.bind(this)
    }

    // Updates an object whenever the props change
    async componentDidUpdate(oldProps) {
      // https://stackoverflow.com/questions/37009328/re-render-react-component-when-prop-changes
      if (this.props !== oldProps) {
        this.getEmails();
      }
    }

    async getEmails() {
        // https://developers.google.com/calendar/quickstart/js#step_2_set_up_the_sample
        // https://developers.google.com/calendar/v3/reference/calendarList/list#php
        // https://developers.google.com/calendar/v3/reference/calendarList/get
        // https://reactjs.org/docs/state-and-lifecycle.html and/or https://reactjs.org/docs/faq-state.html?
        // https://www.npmjs.com/package/react-calendar
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
        // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674
        // https://stackoverflow.com/questions/7244246/generate-an-rfc-3339-timestamp-similar-to-google-tasks-api
        // https://stackoverflow.com/questions/7244246/generate-an-rfc-3339-timestamp-similar-to-google-tasks-api
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString

        // Get the sign in status
        let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

        // Clean out whatever was there before
        this.setState({
          emails: []
        });

        // https://developers.google.com/gmail/api/quickstart/js
        // https://developers.google.com/gmail/api/v1/reference
        // https://developers.google.com/gmail/api/v1/reference/users/messages
        // https://developers.google.com/gmail/api/v1/reference/users/messages/list
        // https://developers.google.com/gmail/api/v1/reference/users/messages/get
        // https://www.w3schools.com/jsref/jsref_length_array.asp
        // https://www.w3schools.com/jsref/jsref_push.asp
        // https://developers.google.com/gmail/api/v1/reference/users/threads/get

        // https://developers.google.com/identity/sign-in/web/people
        // https://developers.google.com/gmail/api/v1/reference/users/getProfile

        // Get calendar events for the given day
        // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx?page=1&tab=votes#tab-top
        if (isSignedIn) {

            // Get user's email address
            let email = this.props.googleAPIObj.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
            this.props.googleAPIObj.client.gmail.users.labels.list({'userId': 'me'}).then(response => {
                console.log(response);
            });

            // Email Filter Settings
            let labelIds = ['INBOX']; // Only readin in inbox for now

            if (this.state.unread) // Read + Unread or Unread Only
                labelIds.push("UNREAD");

            switch(this.state.box) { // Category
                case 'Primary':
                    labelIds.push("CATEGORY_PERSONAL");
                    break;
                case 'Social':
                    labelIds.push("CATEGORY_SOCIAL");
                    break;
                case 'Promotions':
                    labelIds.push("CATEGORY_PROMOTIONS");
                    break;
                case 'Updates':
                    labelIds.push("CATEGORY_UPDATES");
                    break;
                case 'Forums':
                    labelIds.push("CATEGORY_FORUMS");
                    break;
                default:
                    break;
            } // https://www.w3schools.com/js/js_switch.asp

            // Get emails
            // https://developers.google.com/gmail/api/v1/reference/users/messages
            let counter = 0;
            let emaiList = this.props.googleAPIObj.client.gmail.users.messages.list({'userId': 'me', 'labelIds': labelIds}).then(response => {
                // Get list of messages
                let messages = response.result.messages;

                // Make a call for the message details and populate the state array
                if (messages !== undefined) {
                    messages.forEach(message => {
                        // For each email, create an entry in the state array with the email subject and a link to view the email (for more details)
                        this.props.googleAPIObj.client.gmail.users.messages.get({'userId': 'me', 'id': message.id}).then(response => {
                            // https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
                            this.setState ({ // https://www.w3schools.com/Jsref/jsref_concat_array.asp
                                "emails": this.state.emails.concat([{
                                    'subject': response.result.payload.headers.filter(header => {return header.name === "Subject"})[0].value, 
                                    // https://stackoverflow.com/questions/38877956/get-direct-url-to-email-from-gmail-api-list-messages
                                    // https://stackoverflow.com/questions/20780976/obtain-a-link-to-a-specific-email-in-gmail
                                    'link': 'https://mail.google.com/mail?authuser=' + email + '#all/' + message.threadId,
                                    index: counter
                                }])
                            });
                            counter += 1;
                        });
                    })
                }
            });
        }
        else {
            this.setState({
              emails: []
            });
        }
    }

    // https://reactjs.org/docs/forms.html
    updateEmailConfig(event) {
        console.log(this.state)
    }

    // https://reactjs.org/docs/forms.html
    updateBox(event) {
        this.setState({
            ...this.state,
            box: event.target.value
        });
        console.log(event.target.value);
    }

    // https://reactjs.org/docs/forms.html
    // https://www.w3schools.com/tags/att_input_checked.asp
    updateUnread(event) {
        this.setState({
            ...this.state,
            unread: event.target.checked
        });
        console.log(event.target.checked);
    }

    render() {
        // Sign in status
        let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

        // Create a placeholder item in case there are no events for the day
        let placeHolder = null;
        if (isSignedIn) {
            placeHolder = <div className="placeholder">No new emails</div>
        } else {
            placeHolder = <div className="placeholder">Please Sign In</div>
        }

        // Get calendar events
        let emails = []
        this.state.emails.forEach(email => {
            emails.push(
                <div className="email" key={email.index}>
                    {/* https://stackoverflow.com/questions/15551779/open-link-in-new-tab-or-window */}
                    <a target="_blank" rel="noopener noreferrer" href={email.link}>{email.subject}</a>
                </div>
            )
        })

        return (
            <Rnd className="Widget">
                <div className="email-container">
                    <h2>Emails</h2>
                    <div>
                        {/* 
                            https://react-bootstrap.netlify.app/components/forms/#forms-custom-switch 
                            https://react-bootstrap.netlify.app/components/buttons/
                        */}
                        <Form inline>
                            <Form.Label>Category Select</Form.Label>
                            <Form.Control 
                                as="select" 
                                onChange={this.updateBox} 
                                readOnly 
                                custom
                            >
                                <option>Primary</option>
                                <option>Social</option>
                                <option>Promotions</option>
                                <option>Forums</option>
                                <option>All</option>
                            </Form.Control>
                            <Form.Check 
                                type="switch"
                                label="See Only Unread Emails"
                                id="unread-switch"
                                onChange={this.updateUnread}
                                defaultChecked={this.state.unread} // https://stackoverflow.com/questions/32174317/how-to-set-default-checked-in-checkbox-reactjs
                            />
                            <Button variant="info" onClick={this.getEmails}>Update</Button>
                        </Form>
                        <hr/>
                    </div>
                    <div className="emails">
                        {(emails.length !== 0) ? emails : placeHolder}
                    </div>
                </div>
            </Rnd>
        );
    }
}

export default EmailWidget;

// Some other references:
// https://reactjs.org/docs/uncontrolled-components.html
// https://stackoverflow.com/questions/47743629/input-checkbox-checked-by-default
// https://react-bootstrap.netlify.app/components/forms
// https://reactjs.org/docs/forms.html
// https://webapps.stackexchange.com/questions/31926/how-can-i-find-a-message-by-message-id-in-gmail
// Maybe not: https://developers.google.com/identity/sign-in/web/reference and maybe not https://stackoverflow.com/questions/57466728/how-to-get-profile-data-from-gapi-in-react and https://stackoverflow.com/questions/7130648/get-user-info-via-google-api
// https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md