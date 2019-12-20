const aws = require("aws-sdk");

var sts = new aws.STS();

var params = {
  DurationSeconds: 3600,
  ExternalId: `orchestratedStyleGuideDeployment`, 
  RoleArn: process.env.AWS_ROLE_ARN, 
  RoleSessionName: `orchestratedStyleGuideDeployment-${Date.now()}`
};
sts.assumeRole(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     {
    console.log(`AWS_ACCESS_KEY_ID=${data.Credentials.AccessKeyId}`);
    console.log(`AWS_SECRET_ACCESS_KEY=${data.Credentials.SecretAccessKey}`);
    console.log(`AWS_SESSION_TOKEN=${data.Credentials.SessionToken}`);
  }
});