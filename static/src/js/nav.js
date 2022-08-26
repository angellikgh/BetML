function toggleNav(){ 
    if (window.innerWidth < 768){
        document.getElementById('nav').classList.toggle('-left-full'); 
        document.getElementById('nav').classList.toggle('left-20')
    }  
    else{
        document.getElementById('nav').classList.toggle('-left-full'); 
        document.getElementById('nav').classList.toggle('left-40')
    }  
    
    if (document.getElementById('nav').classList.contains('left-20') || document.getElementById('nav').classList.contains('left-40')) { 
        document.getElementById('ham').setAttribute('d', "M4.5 19.5l15-15m-15 0l15 15" ); 
    }
    
    else { 
        document.getElementById('ham').setAttribute('d', "M4 6h16M4 12h8m-8 6h16")
    }
    
    return false
}