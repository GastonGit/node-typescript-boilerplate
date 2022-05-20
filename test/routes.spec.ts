import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
import app from '../src/app';

// TODO: Ensure the server is closed after tests.
describe('Routes suite', () => {
    describe('GET /', () => {
        it('should return a success message', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.text).to.equal('Boiler!');
                    done();
                });
        });
    });
    describe('GET /example', () => {
        it('should return a success message', (done) => {
            chai.request(app)
                .get('/example')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.body).to.equal('test');
                    done();
                });
        });
    });
});
