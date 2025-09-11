const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = characterNames;

console.log({ trunks });

const returnsArrayFn = () => {
  return ['ABC', 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);

// Tarea:

const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log(newValue);
    },
    // necesario el as const para desestructuracion
  ] as const;
};

// desestructuramos el array en base a su posicion asignandole nombres de variable a cada posicion
const [name, setName] = useState('Goku');
console.log(name); // Goku
setName('Vegeta'); // Imprime "Vegeta"
