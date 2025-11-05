function switchLang(lang){
    document.querySelectorAll('[data-en]').forEach(el=>{
        el.textContent = (lang==='en') ? el.getAttribute('data-en') : el.getAttribute('data-zh');
    });
}
