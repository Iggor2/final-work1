
const getByClass = (value) => document.getElementsByClassName(value)[0]
const getById = (value) => document.getElementById(value)
const getByS = value => document.querySelector(value)

const styleBtn = getByClass('style')
const editBtn = getByClass('edit')
const controlBlock = getById('control')
const saveBtn = getById('saveBtn')
const previewContainer = getById('preview');


const formEdit = document.getElementById('editBlock');
const formStyle = document.getElementById('styleBlock');


const f1 = formStyle.fontSize;
const f2 = formStyle.fontFamily;
const f3 = formStyle.formStyle;
const f4 = formStyle.colors;
let colorTarget;


styleBtn.onclick = function () {
    formStyle.style.display = 'block'
    formEdit.style.display = 'none'
}

editBtn.onclick = function () {
    formEdit.style.display = 'block'
    formStyle.style.display = 'none'
    getById('textarea').value = previewContainer.innerHTML
}



getById('saveBtn').onclick = () => {
    previewContainer.innerHTML = getById('textarea').value
    formEdit.style.display = 'none'
}

f1.onchange = function (ev) {
    previewContainer.style.fontSize = ev.target.value

}

f2.onchange = function (ev) {
    previewContainer.style.fontFamily = ev.target.value;
}

f3.elements[0].onclick = function () {
    if (this.checked) getByS('#preview').style.fontWeight =
        'bold';
    else getByS('#preview').style.fontWeight = 'normal'
}

f3.elements[1].onclick = function () {
    if (this.checked) getByS('#preview').style.fontStyle =
        'italic';
    else getByS('#preview').style.fontStyle = 'normal'
}

f4.querySelectorAll('input').forEach((buttonColorTarget) => {
    buttonColorTarget.onclick = function () {
        colorTarget = this.name;
        getByS('.colors').classList.remove('hide');
    }
});

getByS('.colors').onclick = function (ev) {
    if (colorTarget === 'text-color') {
        previewContainer.style.color = ev.target.style.backgroundColor;
    } else if (colorTarget === 'bg-color') {
        previewContainer.style.backgroundColor = ev.target.style.backgroundColor;
    }

    this.classList.add('hide');
}


let colors = ['red', 'blue', 'green', 'black', 'yellow', 'pink', 'white', 'violet', 'darkcyan']
for (let i = 0; i < getByS('.colors').children.length; i++) {
    getByS('.colors').children[i].style.backgroundColor = colors[i];
}


getById('addBtn').onclick = function () {
    getByClass('container').style.display = 'none'
    getById('Block2').style.display = 'block'
}

f5 = document.forms['table']
f6 = document.forms['list']

getById('Block2').children[1].onchange = function () {
    f6.style.display = 'none'
    f5.style.display = 'block'
}

getById('Block2').children[2].onchange = function () {
    f5.style.display = 'none'
    f6.style.display = 'block'

}


f5.crTb.onclick = function () {

    let countTR = f5.cTr.value
    let countTD = f5.cTd.value
    let widthOfTD = f5.wTd.value
    let heightOfTD = f5.hTd.value
    let widthOfBorder = f5.wOfB.value
    let typeOfBorder = f5.tOfB.value
    let colorOfBorder = f5.cOfB.value

    let outputHTML = ''
    outputHTML += '<table style="border: ' + widthOfBorder + 'px' + ' ' + typeOfBorder + ' ' + colorOfBorder + '; border-collapse: collapse">'
    for (let i = 0; i < countTR; i++) {
        outputHTML += '<tr style="border: ' + widthOfBorder + 'px' + ' ' + typeOfBorder + ' ' + colorOfBorder + '; border-collapse: collapse">'
        for (let z = 0; z < countTD; z++) {
            outputHTML += '<td style="width:' + widthOfTD + 'px' + '; height: ' + heightOfTD + 'px' + '; border: ' + widthOfBorder + 'px' + ' ' + typeOfBorder + ' ' + colorOfBorder + '; border-collapse: collapse; ">TD</td>'
        }
        outputHTML += '</tr>'
    }
    outputHTML += '</table>'

    getById('textarea').value = previewContainer.innerHTML + outputHTML
    getByClass('container').style.display = 'block'
    getById('Block2').style.display = 'none'
    f5.style.display = 'none'
    getById('Block2').children[1].children[0].checked = false

    f5.cTr.value = ''
    f5.cTd.value = ''
    f5.wTd.value = ''
    f5.hTd.value = ''
    f5.wOfB.value = ''

}

let outputHTML1 = ''
f6.crLst.onclick = function () {
    let countLi = f6.cLi.value
    let typeOfMarks = f6.tOfM.value

    outputHTML1 += '<ul style="margin-left: 15px">'
    for (let j = 0; j < countLi; j++) {
        outputHTML1 += `<li style="list-style-type:${typeOfMarks}">item${j + 1}</li>`
    }
    outputHTML1 += '</ul>'

    getById('textarea').value = previewContainer.innerHTML + outputHTML1
    getByClass('container').style.display = 'block'
    getById('Block2').style.display = 'none'
    f6.style.display = 'none'
    getById('Block2').children[2].children[0].checked = false

    f6.cLi.value = ''
}





