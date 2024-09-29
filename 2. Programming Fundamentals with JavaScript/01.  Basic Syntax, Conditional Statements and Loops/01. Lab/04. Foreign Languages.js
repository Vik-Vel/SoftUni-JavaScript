function foreignLang(language){
    let result = '';

    if(language == 'England' || language == 'USA'){
        result = 'English';
    }
    else if(language == 'Spain' || language == 'Argentina' || language == 'Mexico'){
        result = 'Spanish';
    }
    else{
        result = 'unknown';
    }

    console.log(result);
}