const regex = /^#([0-9a-fA-F]{3}){1,2}$/;
const $result = document.querySelector('#result');
const $input = document.querySelector('#input');

function validate() {
    console.log($input.value);
    
    const $i = $result.querySelector('i');
    
    if(checkRegex($input.value)) {
        if($i.classList.contains('fa-x')) {
            $i.classList.remove('fa-x');
            $i.classList.add('fa-check');
        }
    } else {
        if($i.classList.contains('fa-check')) {
            $i.classList.remove('fa-check');
            $i.classList.add('fa-x');
        }
    }
    if($result.classList.contains('hidden')) $result.classList.remove('hidden');
}

function checkRegex(string) {
    return regex.test(string);
}

$input.addEventListener('keydown', e => e.key === 'Enter' && validate());
document.querySelector('#validate').addEventListener('click', validate);
const regexStr = String(regex);
document.querySelector('#regex').textContent = regexStr.substring(regexStr.indexOf('/') + 1, regexStr.lastIndexOf('/'));