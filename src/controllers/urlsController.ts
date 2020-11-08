import {define, singleton, inject} from "@appolo/inject"
import {controller, get, post, body, res, IResponse, params, Controller, NotFoundError} from "@appolo/route"
import {view} from "@appolo/view"
import {validate, string} from "@appolo/validator"
import {UrlsManager} from "../managers/urlsManager";

@controller()
export class UrlsController extends Controller {
    @inject() private urlsManager: UrlsManager;

    @get("/")
    @view("index.ejs")
    async getAll() {
        const allData = await this.urlsManager.getAll();
        return {shortUrls: allData}

    }

    @post("/short")
    @validate({fullUrl: string().required()})
    async create(@body() body: { fullUrl: string }, @res() res: IResponse) {

        await this.urlsManager.create(body.fullUrl);

        res.redirect('/')

    }

    @get("/:shortid")
    @validate({shortid: string().required()})
    async get(@params() params: { shortid: string }, @res() res: IResponse) {

        let doc = await this.urlsManager.getOneAndIncCounter(params.shortid)

        if (!doc) {
            throw new NotFoundError(`${params.shortid} not found`)
        }

        res.redirect(doc.full)

    }
}



