let num = document.getElementById('tnum'),
    adc = document.getElementById('add'),
    dele = document.getElementById('del'),
    sel = document.getElementById('sel'),
    esc = document.getElementById('esc'),
    fim = document.getElementById('fim'),
    v = false,
    numb,
    maior = 0,
    menor = 100,
    tot = 0,
    nums = [];

num.addEventListener('keyup', verif)
num.addEventListener('blur', verif)
dele.addEventListener('click', del)
adc.addEventListener('click', add)
fim.addEventListener('click', final)

function verif() {
    if (num.value > 100) {
        num.value = '100';
    } else if (num.value === "0") {
        num.value = '1';
    } else if (num.value < 0) {
        num.value = '1';
    }
}

function add() {
    numb = Number(num.value);
    console.log(numb)
    if (num.value >= 1 && num.value <= 100) {
        nums.push(numb);
        let option = document.createElement('option');
        option.text = `O valor ${num.value} foi adicionado.`;
        sel.appendChild(option);
        num.value = '';
        num.focus();
    }
}

function del() {
    nums.splice((sel.selectedIndex) - 1, 1);
    sel.remove(sel.selectedIndex);
}

function final() {
    if (nums.length > 0) {
        for (let pos in nums) {
            tot += nums[pos];
            if (nums[pos] > maior) {
                maior = nums[pos];
            }
            if (nums[pos] < menor) {
                menor = nums[pos];
            }
        }

        document.body.style.height = '100vh';
        esc.style.height = '55vh';

        esc.innerHTML = `<div class='sect result' id="centro">
                        <div id="centro">
                            Resultado
                        </div>
                        <div id="text">
                            <p>Ao todo, temos ${nums.length} números cadastrados.</p>
                            <p>O maior número informado foi ${maior}.</p>
                            <p>O menor número informado foi ${menor}.</p>
                            <p>Somando todos os números, temos ${tot}.</p>
                            <p>A média dos números digitados é ${parseFloat((tot / nums.length).toFixed(2))}.</p>
                        </div>
                        <div>
                            <input type="submit" value="Voltar" class="botao" id="voltar">
                        </div>
                    </div>`

        let voltar = document.getElementById('voltar');
        voltar.addEventListener('click', volt)
    }
}

function volt() {
    location.reload();
}