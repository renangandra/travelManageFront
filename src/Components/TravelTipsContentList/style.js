import {
    createStyles,
    makeStyles,
} from '@material-ui/core';

export const searchStyles = makeStyles(() => {
    return createStyles({
        container: {
            marginTop: '20px',
            display: 'grid',
            'justify-items': 'center',
            paddingBottom: '30px'
        },
        card: {
            marginTop: '16px',
            display: 'grid',
            'justify-items': 'center',
            'max-width': '300px',
            'align-content': 'center',
            paddingBottom: '8px',
        },
        textContent: {
            'font-size': '12px',
            marginTop: '8px',
            textAlign: 'center'
        },
        textNotContent: {
            marginTop: '16px',
        },
        spanTextContent: {
            marginTop: '8px',
        },
        cardContent:{
            display: 'grid',
            'justify-items': 'center',
            'align-items': 'center',
        },
    });
});