const calValue = number => {

    let x = document.forms['calculator'].elements['display'].value;

    if (x == 0)
        document.forms['calculator'].elements['display'].value = number.toString();

    else
        document.forms['calculator'].elements['display'].value += number.toString();
};

const handleOperator = (char) => {

    let displayValue = document.forms['calculator'].elements['display'].value;

    let x = displayValue.charAt(displayValue.length - 1);

    if (x == '+' || x == '-' || x == '*' || x == '/' || displayValue == 0)
        return;

    else
        document.forms['calculator'].elements['display'].value += char.toString();
};