function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b===0){
        return "Division By Zero Error"
    }
    return a/b;
}
function operate(a,op,b){
    if(op==="+"){
        return add(a,b);
    }
    else if(op==="-"){
        return sub(a,b);
    }
    else if(op==="*"){
        return mul(a,b);
    }
    else if(op==="/"){
        return div(a,b);
    }
}