#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {
  CdkPlaygroundPipelineStack,
  CdkPlaygroundStack,
} from '../lib/cdk-playground-stack';

const app = new cdk.App();
new CdkPlaygroundStack(app, 'CdkPlaygroundStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new CdkPlaygroundPipelineStack(app, 'CdkPlaygroundPipelineStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

app.synth();
