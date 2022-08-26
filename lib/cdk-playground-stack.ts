import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from 'aws-cdk-lib/pipelines';

export class CdkPlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Init a CdkPlaygroundBucket
    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
    });
  }
}

export class CdkPlaygroundPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyFirstPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('thangkieu/becalm.icu', 'main'),
        commands: ['npm ci', 'npm run build'],
      }),
    });
  }
}
