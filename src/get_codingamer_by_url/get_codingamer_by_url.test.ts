import { Codingamer } from "../Codingamer/Codingamer";
import { get_codingamer_by_url } from "./get_codingamer_by_url";

test("get codingamer by url : valid", (done) => {
	get_codingamer_by_url("https://www.codingame.com/profile/1d87d0a239c8e2f69181240098e0bb515984292").then(codingamer => {
		expect(codingamer).toBeInstanceOf(Codingamer);
		done();
	}).catch(err => {
		fail(err.name+" : "+err.message);
	});
});

test("get codingamer by url : invalid url", (done) => {
	get_codingamer_by_url("dvsgsvdbvdb")
	.then(() => {
		done("no throw when invalid url");
	}).catch(err => {
		expect(err.type).toBe("bad_argument");
		done();
	})
})

test("get codingamer by url : invalid public handler", (done) => {
	get_codingamer_by_url("https://www.codingame.com/profile/9c8e2f691812")
	.then(() => {
		done("no throw when invalid url");
	}).catch(err => {
		expect(err.type).toBe("api_return_null");
		done();
	})
})