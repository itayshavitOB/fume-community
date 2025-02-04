/**
 * © Copyright Outburn Ltd. 2022-2023 All Rights Reserved
 *   Project name: FUME
 */

import express from 'express';
import config from '../config';

const serverConfig = config.getServerConfig();

export const failOnStateless = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (serverConfig.SERVER_STATELESS) {
    res.status(405).json({ message: 'Endpoint unavailable without FHIR server' });
  }
  next();
};
