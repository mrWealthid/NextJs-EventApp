// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import * as fs from "fs";
import path from "path";

type Data = {
    status: string,
    data: {}
}
const filepath = path.join(process.cwd(), 'data', 'events.json');
const events = JSON.parse(fs.readFileSync(filepath, "utf-8"));
export default function getEvents(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        status: 'success',
        data: {
            events
        }
    });
}
// export function getEvent(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     res.status(200).json({
//         status: 'success',
//         data: {
//             index: index
//         }
//     });
// }