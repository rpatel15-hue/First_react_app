import NewMeetupForm from "../Components/meetups/NewMeetUpForm";
import {useNavigate} from "react-router-dom";

function NewMeetupPage() {
    const navigate = useNavigate()
    function addMeetupHandler(meetupData) {
        fetch(
            'https://test-project-dcb42-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {'Content-Type':'application/json'}
            }
            ).then(()=>{
                navigate('/',{replace: true})
        })
    }
    return <section>
        <h1>
            Add New Meetup
        </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>;
}

export default NewMeetupPage;