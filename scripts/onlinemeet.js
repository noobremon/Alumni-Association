document.getElementById('meeting-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('meeting-title').value;
    const description = document.getElementById('meeting-description').value;
    const link = document.getElementById('google-meet-link').value;

    const meetingDiv = document.createElement('div');
    meetingDiv.className = 'meeting';

    const meetingTitle = document.createElement('h3');
    meetingTitle.textContent = title;

    const meetingDescription = document.createElement('p');
    meetingDescription.textContent = description;

    const meetingLink = document.createElement('a');
    meetingLink.href = link;
    meetingLink.target = '_blank';
    meetingLink.textContent = 'Join the Meeting';

    meetingDiv.appendChild(meetingTitle);
    meetingDiv.appendChild(meetingDescription);
    meetingDiv.appendChild(meetingLink);

    document.getElementById('meetings').appendChild(meetingDiv);

    document.getElementById('meeting-form').reset();
});
