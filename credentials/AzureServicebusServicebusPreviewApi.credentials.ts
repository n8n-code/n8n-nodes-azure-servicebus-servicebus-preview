import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureServicebusServicebusPreviewApi implements ICredentialType {
        name = 'N8nDevAzureServicebusServicebusPreviewApi';

        displayName = 'Azure Servicebus Servicebus Preview API';

        icon: Icon = { light: 'file:../nodes/AzureServicebusServicebusPreview/azure-servicebus-servicebus-preview.png', dark: 'file:../nodes/AzureServicebusServicebusPreview/azure-servicebus-servicebus-preview.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Servicebus Servicebus Preview API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
