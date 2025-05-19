import Select from 'react-select';

const options = [
    { value: 'cat', label: 'Gato' },
    { value: 'dog', label: 'Perro' },
    { value: 'bird', label: 'Pájaro' },
];

/*const options = [
    {
        value: 'EUR - Є',
        label: (
            <>
                <img
                    src="https://puesgjbxmhfjnkeuwrnp.supabase.co/storage/v1/object/public/source/logos/flags/Flag%20Spain%20Icon.svg"
                    alt="SVG Icon Spain"
                    width = { "20px" } height = { "20px" } />
                EUR - Є
            </>
        ),
    },
    {
        value: 'USD - $',
        label: (
            <>
                <img
                    src="https://puesgjbxmhfjnkeuwrnp.supabase.co/storage/v1/object/public/source/logos/flags/Flag%20Spain%20Icon.svg"
                    alt="SVG Icon Spain"
                    width = { "20px" } height = { "20px" } />
                USD - $
            </>
        )
    }
];*/

export default function IconSelect() {
    return (
        <div style={{ position: 'relative', zIndex: 999 }}>
            {/* <h1>Ejemplo</h1> */}
            <Select options = { options } />
        </div>
    );
}