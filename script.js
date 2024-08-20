let submit_pass_len = document.getElementById("submit_pass_len");
let input = document.getElementById("pass_len");
let generated_pass = document.getElementById("generated_pass");
let pass_para = document.getElementById("pass_para");


submit_pass_len.addEventListener('click', function(){
    let pass_len = Number(document.getElementById("pass_len").value);
    let password = '';
    for (let i = 0; i < pass_len; i++) {
        let random_num = Math.floor(Math.random()*90) + 32;
        let pass_char = String.fromCharCode(random_num);
        password = password + pass_char;
    }
    generated_pass.innerText = password;
    pass_para.style.display = "block";
    console.log(password)
});

input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        let pass_len = Number(document.getElementById("pass_len").value);
        let password = '';
        for (let i = 0; i < pass_len; i++) {
            let random_num = Math.floor(Math.random()*90) + 32;
            let pass_char = String.fromCharCode(random_num);
            password = password + pass_char;
        }
        generated_pass.innerText = password;
        pass_para.style.display = "block";
        console.log(password);
    }

});