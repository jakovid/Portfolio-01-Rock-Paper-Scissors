function buildAnnouncementsBox() {
    //get location
    let location = document.getElementById('playBox');
    //create elements
    let announcementsBox = document.createElement('div');
    let mainAnnouncement = document.createElement('div');
    let subAnnouncement = document.createElement('div');
    //add IDs to elements
    announcementsBox.id = 'announcementsBox';
    mainAnnouncement.id = 'mainAnnouncement';
    subAnnouncement.id = 'subAnnouncement';
    //add inner html
    mainAnnouncement.innerHTML = 'Main Placeholder';
    subAnnouncement.innerHTML = 'Sub Placeholder';
    //append items
    announcementsBox.append(mainAnnouncement,subAnnouncement);
    location.append(announcementsBox);
}

export { buildAnnouncementsBox };