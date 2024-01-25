import { Component } from "react";

export default class CCForm extends Component {
    constructor() {
        super();
        this.state = {
            focusedField: "",
            passedGrade: ""
        };
    }

    focusField = (fieldName) => {
        this.setState({ focusedField: fieldName });
    }

    noFocus = () => {
        this.setState({ focusedField: "" });
    }

    noFocusGrade = (e) => {
        this.noFocus();  //קריאה לפונקציה שמאתחלת את השדה פוקוס כדי שהפסקה לא תוצג
        const gradeValue = parseInt(e.target.value); //שמירת ערך השדה שהוזן לתוך משתנה שיכיל את הציון
        if (gradeValue > 555) {
            this.setState({ passedGrade: 'yes' });
        } 
        else if(gradeValue <= 555) {
            this.setState({ passedGrade: 'no' });
        }
    }

    render() {
        return (
            <div style={{ textAlign: "left" }}>
                <form>
                    {this.state.focusedField === 'surName' && (<p style={{ background: 'red' }}>Please fill in a surname </p>)}
                    <label>
                        Surname: <input onFocus={() => this.focusField('surName')} onBlur={this.noFocus} type="text" /> <br />
                    </label>

                    {this.state.focusedField === 'firstName' && (<p style={{ background: 'red' }}>Please fill in a first name </p>)}
                    <label>
                        First name: <input onFocus={() => this.focusField('firstName')} onBlur={this.noFocus} type="text" /> <br />
                    </label>

                    {this.state.focusedField === 'grade' && (<p style={{ background: 'red' }}>Please fill in a grade </p>)}
                    <label>
                        Grade: <input onFocus={() => this.focusField('grade')} onBlur={this.noFocusGrade} type="text" />
                    </label>

                    {this.state.passedGrade === 'yes' && (<p>Congratulations! You can be accepted for studies</p>)}
                    {this.state.passedGrade === 'no' && (<p>Unfortunately, you aren't accepted, try again next year</p>)}
                </form>
            </div>
        );
    }
}
