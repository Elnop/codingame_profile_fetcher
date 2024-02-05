import { Codingamer } from './Codingamer';

describe("update timeout", () => {
	const codingamer = new Codingamer("1d87d0a239c8e2f69181240098e0bb515984292");
	it("update_all", (done) => {
		codingamer.update_all().then(() => {
			codingamer.update_all(AbortSignal.timeout(1)).then(() => {
				done("no timeout");
				return ;
			}, (err : any) => {
				expect(err.type).toBe("timeout");
				done();
				return ;
			})
		}, (err : any) => {
			throw err;
		})
	});
	it("update_achievements", (done) => {
		codingamer.update_all().then(() => {
			codingamer.update_achievements(AbortSignal.timeout(1)).then(() => {
				done("no timeout");
				return ;
			}, (err : any) => {
				expect(err.type).toBe("timeout");
				done();
			})
		}, (err : any) => {
			throw err;
		})
	});
	it("update_basic_data", (done) => {
		codingamer.update_all().then(() => {
			codingamer.update_basic_data(AbortSignal.timeout(1)).then(() => {
				done("no timeout");
				return ;
			}, (err : any) => {
				expect(err.type).toBe("timeout");
				done();
			})
		}, (err : any) => {
			throw err;
		})
	});
	it("update_follower_ids", (done) => {
		codingamer.update_all().then(() => {
			codingamer.update_follower_ids(AbortSignal.timeout(1)).then(() => {
				done("no timeout");
				return ;
			}, (err : any) => {
				expect(err.type).toBe("timeout");
				done();
			})
		}, (err : any) => {
			throw err;
		})
	})
	it("update_following_ids", (done) => {
		codingamer.update_all().then(() => {
			codingamer.update_following_ids(AbortSignal.timeout(1)).then(() => {
				done("no timeout");
				return ;
			}, (err : any) => {
				expect(err.type).toBe("timeout");
				done();
			})
		}, (err : any) => {
			throw err;
		})
	})
	it("update_programming_languages", (done) => {
		codingamer.update_all().then(() => {
			codingamer.update_programming_languages(AbortSignal.timeout(1)).then(() => {
				done("no timeout");
				return ;
			}, (err : any) => {
				expect(err.type).toBe("timeout");
				done();
			})
		}, (err : any) => {
			throw err;
		})
	});
	it("update_topic_skills", (done) => {
		codingamer.update_all().then(() => {
			codingamer.update_topic_skills(AbortSignal.timeout(1)).then(() => {
				done("no timeout");
				return ;
			}, (err : any) => {
				expect(err.type).toBe("timeout");
				done();
			});
		}, (err : any) => {
			throw err;
		})
	});
	it("update_quest_certifications", (done) => {
		codingamer.update_all().then(() => {
			codingamer.update_quest_certifications(AbortSignal.timeout(1)).then(() => {
				done("no timeout");
				return ;
			}, (err : any) => {
				expect(err.type).toBe("timeout");
				done();
			});
		}, (err : any) => {
			throw err;
		})
	});
});

describe("user_id_undefined", () => {
	const codingamer = new Codingamer("1d87d0a239c8e2f69181240098e0bb515984292");
	it("update_achievements", (done) => {
		codingamer.update_achievements().then(() => {
			done("no error trowned");
			return ;
		}, (err : any) => {
			expect(err.type).toBe("user_id_undefined");
			expect(err.func).toBe("update_achievements");
			done();
		})
	});
	it("update_follower_ids", (done) => {;
		codingamer.update_follower_ids().then(() => {
			done("no error trowned");
			return ;
		}, (err : any) => {
			expect(err.type).toBe("user_id_undefined");
			expect(err.func).toBe("update_follower_ids");
			done();
		})
	})
	it("update_following_ids", (done) => {
		codingamer.update_following_ids().then(() => {
			done("no error trowned");
			return ;
		}, (err : any) => {
			expect(err.type).toBe("user_id_undefined");
			expect(err.func).toBe("update_following_ids");
			done();
		})
	})
	it("update_programming_languages", (done) => {
		codingamer.update_programming_languages().then(() => {
			done("no error trowned");
			return ;
		}, (err : any) => {
			expect(err.type).toBe("user_id_undefined");
			expect(err.func).toBe("update_programming_languages");
			done();
		})
	});
	it("update_topic_skills", (done) => {
		codingamer.update_topic_skills().then(() => {
			done("no error trowned");
			return ;
		}, (err : any) => {
			expect(err.type).toBe("user_id_undefined");
			expect(err.func).toBe("update_topic_skills");
			done();
		});
	});
	it("update_quest_certifications", (done) => {
		codingamer.update_quest_certifications().then(() => {
			done("no error trowned");
			return ;
		}, (err : any) => {
			expect(err.type).toBe("user_id_undefined");
			expect(err.func).toBe("update_quest_certifications");
			done();
		});
	});
})
