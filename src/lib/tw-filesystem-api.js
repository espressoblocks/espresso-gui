const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
        {
            description: 'Espresso Project',
            accept: {
                'application/x.scratch.sb3': '.coffee'
            }
        }
    ],
    excludeAcceptAllOption: true
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
            {
                description: 'Espresso Project',
                accept: {
                    "application/x.scratch.sb3": ['.coffee', '.caffeine']
                }
            },
            {
                description: 'PenguinMod Project (Limited Compatibility)',
                accept: {
                    'application/x.scratch.sb3': ['.pmp', '.pm']
                }
            },
            {
                description: 'Scratch Project (Limited Compatibility)',
                accept: {
                    'application/x.scratch.sb3': ['.sb3', '.sb2', '.sb']
                }
            }
        ]
    });
    return handle;
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker
};
