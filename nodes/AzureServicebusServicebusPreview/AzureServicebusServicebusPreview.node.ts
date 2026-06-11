import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureServicebusServicebusPreview implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure Servicebus Servicebus Preview',
		name: 'N8nDevAzureServicebusServicebusPreview',
		icon: { light: 'file:./azure-servicebus-servicebus-preview.png', dark: 'file:./azure-servicebus-servicebus-preview.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure Service Bus client for Namespace, IPFilter, VirtualNetwork, and Zone Redundancy management.',
		defaults: { name: 'Azure Servicebus Servicebus Preview' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureServicebusServicebusPreviewApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
