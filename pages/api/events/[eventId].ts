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
export default function getEvent(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {eventId} = req.query;
    const event = events.find((event: any) => event.id === eventId);
    if (!event) {
        res.status(404).json({
            status: 'failed',
            data: "Invalid Id"
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            event
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