import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Input, Button, Typography } from 'antd';

const { Text } = Typography;

import { Main } from '../../proxy/Main';
import { useUrlGeneratorContext } from '../../context/urlGenerator';
import { validateMail } from '../../validators';

type Status = 'error' | '';

export const InputArea = () => {
    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<Status>('');

    const { generateUrl, shortenedUrlLoading } = useUrlGeneratorContext();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onClick();

    const onClick = () => {
        const isValid = validateMail(inputValue);

        if (!isValid) {
            setStatus('error')
        } else {
            generateUrl(inputValue);
            setInputValue('');
            setStatus('');
        }
    }

    return (
        <Main>
            <Text style={{ marginBottom: 8, fontSize: '16px' }}>
                Generate Minimized URL
            </Text>
            <Input
                placeholder="Enter a regular URL"
                style={{ width: '40%', maxWidth: '400px', marginBottom: 16 }}
                status={status}
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <Button
                type="primary"
                style={{ width: '40%', maxWidth: '400px' }}
                onClick={onClick}
            >
                {shortenedUrlLoading ? 'Loading ...' : 'Confirm Generation'}  
            </Button>
        </Main>
    )
}