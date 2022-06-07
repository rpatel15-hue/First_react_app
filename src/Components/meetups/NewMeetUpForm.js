import classes from "./NewMeetUpForm.module.css";
import Card from "../ui/Card";
function NewMeetupForm() {
    return(
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id='title'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id='image'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id='address'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="Description">Description</label>
                    <textarea type="text" required rows='5' />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;