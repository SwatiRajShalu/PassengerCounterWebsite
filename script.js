let countel=document.getElementById("count-el")
let count=0
let entries=document.getElementById("entries-el")
function increament(){
    count+=1
    countel.innerHTML=count
}
function decreament(){
    count-=1
    countel.innerHTML=count
}
function save(){
    entries.innerHTML+=count+" - "
    count=0
    countel.innerHTML=count

}