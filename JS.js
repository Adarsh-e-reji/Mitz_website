function showDetails(careerId) {
  // Hide all job info content
  var jobInfos = document.getElementsByClassName("job-info-content");
  for (var i = 0; i < jobInfos.length; i++) {
    jobInfos[i].style.display = "none";
  }

  // Show the selected job info content
  document.getElementById(careerId).style.display = "block";

  // Show the job details popup
  document.getElementById("job-details").style.display = "flex";
}

function closeDetails() {
  // Hide the job details popup
  document.getElementById("job-details").style.display = "none";
}
