//
// const Book1 = require('../../model/book/book-schema');
//
// describe('The library feature',  () => {
//   before((done) => {
//
//     Book1.collection.drop();
//     Book1.ensureIndexes(() => {
//       done();
//     });
//   });
//
//   it('should create a new book', (done) => {
//
//     chai.request(server)
//       .post('/book/')
//       .set({ origin: process.env.AllowUrl })
//       .send({ title: 'foobar', type: 'book' })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//
//         done();
//       });
//   });
//
//   it('should find a book', (done) => {
//
//     chai.request(server)
//       .get('/book/getall')
//        .set({ origin: process.env.AllowUrl })
//
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//
//         done();
//       });
//   });
//
// });
