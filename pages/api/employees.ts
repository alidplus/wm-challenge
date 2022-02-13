import type { NextApiRequest, NextApiResponse } from 'next';
import { IEmploye } from 'models/types';
import { omit } from 'lodash'
import db from 'lib/nedb'

export default async (req: NextApiRequest, res: NextApiResponse<IEmploye[] | IEmploye>) => {
  const { method, body } = req
  const Employees = await db('employees')
  
  switch (method) {
    case 'POST': {
      Employees.insert(omit(body, '_id'), function (err: any, newDoc: IEmploye) {
        if (err) res.status(500).end(`opps!! db err: ${err.message}`)
        res.status(200).json(newDoc)
        return
      });
      break
    }
    case 'GET': {
      Employees.find({}).exec(function (err: any, docs: IEmploye[]) {
        if (err) throw new Error(err)
        res.status(200).json(docs);
        return
      });
      break
    }
    default: {
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
};