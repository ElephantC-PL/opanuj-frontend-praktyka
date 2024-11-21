

type validateMethod = (value: number) => boolean

const isBiggerThan0: validateMethod = (value) => value > 0
const isLessThan100: validateMethod = (value) => value < 100
const isEven: validateMethod = (value) => value % 2 === 0

const usedMethods: validateMethod[] = [    
    isBiggerThan0,
    isLessThan100,
    isEven
]

const multiValidator = (value: number, methods: validateMethod[]): boolean => {
    if(Number.isNaN(value)) return false;  
    let result = true;           
    methods.forEach(fn => {
        if (!fn(value)) {
            result = false;
            return
        }
    });
    return result;
}

function validator(): void {
    const input = document.getElementById('input') as HTMLInputElement;
    const button = document.getElementById('validation-btn') as HTMLButtonElement;
    const button2 = document.getElementById('cleanup-btn') as HTMLButtonElement;
    const result = document.getElementById('result') as HTMLElement;

    button.addEventListener('click', ():void => {
        const value: number = Number(input.value);
        if(!value || !Number.isInteger(value)){
            result.innerHTML = 'Invalid - empty or non integer'
            return
        }
        result.innerHTML = multiValidator(value, usedMethods) ? 'Valid' : 'Invalid number';
    });

    button2.addEventListener('click', (): void => {
        input.value = '';
        result.innerHTML = '';
    });
}

validator();