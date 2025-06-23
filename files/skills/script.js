const skillsContainer = document.getElementById("skillsContainer");
const activitiesContainer = document.getElementById("activitiesContainer");
const subtasksContainer = document.getElementById("subtasksContainer");
const viewTitle = document.getElementById("viewTitle");
const backBtn = document.getElementById("backBtn");

function clearAll() {
    skillsContainer.style.display = "none";
    activitiesContainer.style.display = "none";
    subtasksContainer.style.display = "none";
    skillsContainer.innerHTML = "";
    activitiesContainer.innerHTML = "";
    subtasksContainer.innerHTML = "";
}

function renderSkillBoxes() {
    clearAll();
    skillsContainer.style.display = "grid";
    viewTitle.textContent = "Skills";
    backBtn.style.display = "none";

    Object.keys(staticSkillsData).forEach(skillName => {
        const box = document.createElement("div");
        box.className = "card";
        box.textContent = skillName;
        box.onclick = () => renderActivities(skillName);
        skillsContainer.appendChild(box);
    });
}

function renderActivities(skillName) {
    clearAll();
    activitiesContainer.style.display = "grid";
    viewTitle.textContent = skillName;
    backBtn.style.display = "inline-block";

    const activities = staticSkillsData[skillName]?.activities || {};
    Object.keys(activities).forEach(activity => {
        const box = document.createElement("div");
        box.className = "card";
        box.textContent = activity;
        box.onclick = () => renderSubtasks(skillName, activity);
        activitiesContainer.appendChild(box);
    });
}

function renderSubtasks(skillName, activity) {
    clearAll();
    subtasksContainer.style.display = "block";
    viewTitle.textContent = activity;
    backBtn.style.display = "inline-block";

    const list = staticSkillsData[skillName]?.activities[activity] || [];

    list.forEach(taskLine => {
        const div = document.createElement("div");
        div.className = "subtask";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const [text, link] = taskLine.split('|').map(str => str.trim());

        div.appendChild(checkbox);
        div.appendChild(document.createTextNode(text));

        if (link) {
            const anchor = document.createElement("a");
            anchor.href = link;
            anchor.target = "_blank";
            anchor.textContent = " ↗";
            anchor.style.marginLeft = "0.5em";
            div.appendChild(anchor);
        }

        subtasksContainer.appendChild(div);
    });
}

backBtn.onclick = renderSkillBoxes;

window.onload = renderSkillBoxes;
