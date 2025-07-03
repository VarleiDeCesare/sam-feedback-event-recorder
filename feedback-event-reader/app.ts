import { DynamoDBRecord, DynamoDBStreamEvent } from 'aws-lambda';

export const handler = async (event: DynamoDBStreamEvent) => {
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach((record) => {
    logDynamoDBRecord(record);
  });
};

type NewImage = {
  rating: { N: string };
  comment: { S: string };
  Id: { S: string };
  username: { S: string };
};

const logDynamoDBRecord = (record: DynamoDBRecord) => {
  const newRecord = record.dynamodb?.NewImage as NewImage;
  console.log(newRecord);
};
