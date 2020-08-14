import Dialog from '@material-ui/core/Dialog';
import React from "react";
import "../App.css";
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Background from '../Widgets/Background'

export default function SettingsMenu(props) {
    const { isOpen, toggleSettings, toggleWelcome, welcomeOpen, toggleMoving, movingOpen} = props;
    return (
        <Dialog
            open={isOpen}
            onClose={toggleSettings()}
        >
            <DialogContent>
                <FormControlLabel
                    control={<Checkbox
                        onChange={toggleWelcome()}
                        checked={welcomeOpen}/>
                    }
                    label="'Welcome' Background"
                />
                <br/>
                <FormControlLabel
                    control={<Checkbox
                        onChange={toggleMoving()}
                        checked={movingOpen}/>
                    }
                    label="Moving Background"
                />
                <br/><br/>
                <Divider/>
                <Button onClick={toggleSettings()}>
                    Close Settings
                </Button>
            </DialogContent>
        </Dialog>
    );
};