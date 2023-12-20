import { app, InvocationContext } from "@azure/functions";

import * as df from 'durable-functions';


export async function eventHubTrigger1(messages: unknown | unknown[], context: InvocationContext): Promise<void> {
    if (Array.isArray(messages)) {
        context.log(`Event hub function processed ${messages.length} messages`);


        const client = df.getClient(context);

        for (const message of messages) {
            context.log('Event hub message:', message);

            //Invoke Durable Function 
            const body: unknown = JSON.stringify(message);
            const instanceId: string = await client.startNew("durableHello1Orchestrator", { input: body });
            context.log(`Started orchestration with ID = '${instanceId}'.`);


        }
    } else {
        context.log('Event hub function processed message:', messages);
    }

    
}

app.eventHub('eventHubTrigger1', {
    connection: 'myeh0616_RootManageSharedAccessKey_EVENTHUB',
    eventHubName: 'samples-workitems',
    extraInputs: [df.input.durableClient()],
    cardinality: 'many',
    handler: eventHubTrigger1
});
