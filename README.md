# durable-function-typescript-v4

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

## Configure EventHubTrigger1 as orchestrationClient
Need update eventHubTrigger1.ts and add following scripts
```javascript
app.eventHub('eventHubTrigger1', {
    connection: 'myeh0616_RootManageSharedAccessKey_EVENTHUB',
    eventHubName: 'samples-workitems',
    extraInputs: [df.input.durableClient()],
    cardinality: 'many',
    handler: eventHubTrigger1
});
```