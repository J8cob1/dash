import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Rnd } from 'react-rnd';
import "./email.css";

class EmailWidget extends React.Component {
    // State
    constructor() {
        // Call parent constructor
        super()

        // Set initial state
        this.state = {
            emails: []
        };

        // https://stackoverflow.com/questions/52894546/cannot-access-state-inside-function
        this.getEmails = this.getEmails.bind(this);
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

        // Get dates
        //let date = selectedDate.toDateString();

        //let eventStartDate = new Date(selectedDate);
        //eventStartDate.setHours(0,0,0,0); // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674

        //let eventEndDate = new Date(selectedDate);
        //eventEndDate.setDate(eventEndDate.getDate() + 1); // https://stackoverflow.com/questions/563406/add-days-to-javascript-date
        //eventEndDate.setHours(0,0,0,0); // https://stackoverflow.com/questions/8636617/how-to-get-start-and-end-of-day-in-javascript/8636674 

        // Get the sign in status
        let isSignedIn = this.props.authenticationSetup === true && this.props.googleAPIObj.auth2.getAuthInstance().isSignedIn.get() === true;

        // Clean out whatever was there before
        this.setState({
          emails: []
        });

        // https://developers.google.com/gmail/api/v1/reference/users/messages/list
        // https://developers.google.com/gmail/api/v1/reference/users/messages/get

        // Get calendar events for the given day
        // https://stackoverflow.com/questions/22876978/loop-inside-react-jsx?page=1&tab=votes#tab-top
        if (isSignedIn) {

            // Get user's email address
            let email = this.props.googleAPIObj.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
            this.props.googleAPIObj.client.gmail.users.labels.list({'userId': 'me'}).then(response => {
                console.log(response);
            });
            // Get emails
            // https://developers.google.com/gmail/api/v1/reference/users/messages
            let counter = 0;
            let emaiList = this.props.googleAPIObj.client.gmail.users.messages.list({'userId': 'me', 'labelIds':['INBOX', 'UNREAD', 'CATEGORY_PERSONAL']}).then(response => {
                // Get list of messages
                let messages = response.result.messages;

                // Make a call for the message details and populate the state array
                if (messages.length > 0) {
                    messages.forEach(message => {
                        // For each email, create an entry in the state array with the email subject and a link to view the email (for more details)
                        this.props.googleAPIObj.client.gmail.users.messages.get({'userId': 'me', 'id': message.id}).then(response => {
                            // https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property
                            this.setState ({ // https://www.w3schools.com/Jsref/jsref_concat_array.asp
                                "emails": this.state.emails.concat([{
                                    'subject': response.result.payload.headers.filter(header => {return header.name === "Subject"})[0].value, 
                                    // https://stackoverflow.com/questions/38877956/get-direct-url-to-email-from-gmail-api-list-messages
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
                    {/* 
                        https://stackoverflow.com/questions/20780976/obtain-a-link-to-a-specific-email-in-gmail
                        https://stackoverflow.com/questions/15551779/open-link-in-new-tab-or-window
                    */}
                    <a target="_blank" rel="noopener noreferrer" href={email.link}>{email.subject}</a>
                </div>
            )
        })

        return (
            <Rnd className="Widget">
                <div>
                    <h1>Emails</h1>
                    {(emails.length !== 0) ? emails : placeHolder}
                </div>
                <div>
                    <h1>Configuration</h1>
                    {/* 
                        https://react-bootstrap.netlify.app/components/forms/#forms-custom-switch 
                        https://react-bootstrap.netlify.app/components/buttons/
                    */}
                    <Form inline>
                        <Form.Label>Category Select</Form.Label>
                        <Form.Control as="select" custom>
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
                        />
                        <Button variant="info">Update</Button>
                    </Form>
                </div>
            </Rnd>
        );
    }
}

export default EmailWidget;

// Some other references:
// https://www.npmjs.com/package/gapi-script?activeTab=readme
// https://www.npmjs.com/package/react-calendar
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://reactjs.org/docs/composition-vs-inheritance.html (maybe)
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-basics
// https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/* (* is supposed to represent the fact that I refernced multiple pages from the Date page, though I'm not sure I ended up using all of them)
// https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js
// This one for sure though: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
// Maybe this, but not really: https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// https://react-bootstrap.github.io/components/buttons/
// https://developers.google.com/calendar/quickstart/js
// https://www.npmjs.com/package/gapi-script
// https://www.valentinog.com/blog/await-react/
// https://developers.google.com/identity/sign-in/web/reference
// https://developers.google.com/calendar/v3/reference
// https://developers.google.com/calendar/quickstart/js
// https://developers.google.com/calendar/overview
// https://developers.google.com/calendar/v3/reference/events

// https://stackoverflow.com/questions/39089495/google-api-client-libraries-for-react-project-javascript-or-node-js
// https://stackoverflow.com/questions/53147396/what-is-the-difference-between-the-two-google-js-clients-platform-js-vs-api-js#:~:text=1-,platform.,for%20JavaScript%20client%2Dapplication%20developers.
// https://gist.github.com/mikecrittenden/
// https://stackoverflow.com/questions/9121902/call-an-asynchronous-javascript-function-synchronously
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
// Eh. Not really: https://github.com/robsontenorio/vue-api-query/issues/48
// https://stackoverflow.com/questions/39679505/using-await-outside-of-an-async-function
// https://stackoverflow.com/questions/27715275/whats-the-difference-between-returning-value-or-promise-resolve-from-then
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// https://stackoverflow.com/questions/42701963/use-await-outside-async
// https://www.valentinog.com/blog/await-react/
// https://stackoverflow.com/questions/45285129/any-difference-between-await-promise-all-and-multiple-await

// Probably not: https://developers.google.com/calendar/quickstart/nodejs
// https://stackoverflow.com/questions/11607465/need-good-example-google-calendar-api-in-javascript
// https://stackoverflow.com/questions/28262674/retrieve-google-calendar-events-using-api-v3-in-javascript
// https://github.com/googleapis/google-api-nodejs-client
// https://nextjs.org/docs/api-reference/next.config.js/environment-variables
// https://www.npmjs.com/package/googleapis
// https://developers.google.com/calendar/v3/reference/events/list
// https://developers.google.com/calendar/v3/reference/calendars/get
// https://stackoverflow.com/questions/27322837/how-can-i-show-a-list-of-all-available-calendars-using-google-calendar-api-v3
// https://stackoverflow.com/questions/57466728/how-to-get-profile-data-from-gapi-in-react
// Maybe not: https://stackoverflow.com/questions/43021/how-do-you-get-the-index-of-the-current-iteration-of-a-foreach-loop and https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
// https://reactjs.org/docs/react-component.html
// https://stackoverflow.com/questions/30626030/can-you-force-a-react-component-to-rerender-without-calling-setstate
// https://www.educative.io/edpresso/how-to-force-a-react-component-to-re-render
// Not really used: https://stackoverflow.com/questions/36270422/reactjs-settimeout-not-working
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// Maybe not: https://stackoverflow.com/questions/51741828/need-to-execute-function-before-render-in-reactjs