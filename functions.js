const storage = {
    used: 815,
    left: 185,
    min: 0,
    max: 1000,
    unit: "GB"
}
const progressPercent=parseInt(storage.used/storage.max*100)+"%"

document.getElementById("storageText").innerHTML= "You’ve used "+ "<span class='bold'>"+storage.used + " " + storage.unit+ "</span> your storage";
document.getElementById("storageInfoMin").innerHTML = storage.min + " " + storage.unit;
document.getElementById("storageInfoMax").innerHTML = storage.max + " " + storage.unit;
document.getElementById("storageBarProgress").style.width=progressPercent;

document.getElementById("storageSummary").innerHTML = "<span>"+storage.left + "</span>" +" " + storage.unit + " LEFT";