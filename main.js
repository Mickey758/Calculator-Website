function input(number){
    const eq = document.getElementById("equation");
    eq.value += number;
    eq.placeholder = "";
}
function solve(){
    const eq = document.getElementById("equation");
    try{
        const answer = eval(eq.value);
        eq.value = "";
        eq.placeholder = answer;
    }catch{
        eq.value = "";
        eq.placeholder = "An Error Occured";
    }
}
function c(){
    const eq = document.getElementById("equation");
    eq.value = "";
    eq.placeholder = "";
}
function backspace(){
    const eq = document.getElementById("equation");
    eq.value = eq.value.slice(0, -1);;
    eq.placeholder = "";
}