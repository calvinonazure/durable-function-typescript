# durable-function-typescript

- Following document https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-typescript?pivots=nodejs-model-v4 and create template
- Seperate the Orchestrator and Activity functions from single file

## Test Location

http://localhost:7071/api/orchestrators/durableHello1Orchestrator

## local.settings.json content should like following

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=mystorage0322;AccountKey=***********;EndpointSuffix=core.windows.net",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsFeatureFlags": "EnableWorkerIndexing",
    "myeh0616_RootManageSharedAccessKey_EVENTHUB": "Endpoint=sb://myeh0616.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=*******;EntityPath=samples-workitems"
  }
}
```