import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';
import path from 'path';

import BaseDistribution from '../base-distribution';
import {NodeInputs, INodeVersion, INodeVersionInfo} from '../base-models';

interface INodeRelease extends tc.IToolRelease {
  lts?: string;
}

export default class OfficialBuilds extends BaseDistribution {
  constructor(nodeInfo: NodeInputs) {
    super(nodeInfo);
  }

  protected getDistributionUrl(): string {
    return `https://nodejs.org/dist`;
  }
}
