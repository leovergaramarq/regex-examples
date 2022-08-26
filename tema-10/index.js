const regex = /n([pb])/g;
const $result = document.querySelector('#result');
const $input = document.querySelector('#input');
const $correction = document.querySelector('#correction');

function validate() {
    console.log($input.value);
    
    const $i = $result.querySelector('i');
    
    if(!checkRegex($input.value)) {
        if($i.classList.contains('fa-x')) {
            $i.classList.remove('fa-x');
            $i.classList.add('fa-check');
        }
        $input.style.borderBottomColor = 'greenyellow';
    } else {
        if($i.classList.contains('fa-check')) {
            $i.classList.remove('fa-check');
            $i.classList.add('fa-x');
        }
        $input.style.borderBottomColor = 'red';
    }
    $correction.textContent = $input.value.replaceAll(regex, 'm$1');
    if($result.classList.contains('hidden')) $result.classList.remove('hidden');
}

function checkRegex(string) {
    return regex.test(string);
}

$input.addEventListener('keydown', e => {
    if(e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        validate();
    }
});
document.querySelector('#validate').addEventListener('click', validate);

const regexStr = String(regex);
document.querySelector('#regex').textContent = regexStr.substring(regexStr.indexOf('/') + 1, regexStr.lastIndexOf('/'));
