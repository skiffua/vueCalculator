export default {
    bind(el, binding) {
        el.style.borderStyle = 'none';
        el.style.borderRadius = '4px';
        switch (binding.value) {
            case 'digit_button':
                el.style.backgroundColor = '#f1f3f4';
                break;
            case 'operation_button':
                el.style.backgroundColor = '#dee0e4';
                break;
            case 'equal_button':
                el.style.backgroundColor = '#4585f4';
                break;
        }
    }
}