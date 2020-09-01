const expect = require('chai').expect;
const messages = require('../lib/messages');

describe('messages', () => {
  describe('sanitizeMessage', () => {
    it('should throw an error if falsy message parameter');

    it('should not sanitize a message with truthy FROM and TO properties', () => {
      const expected = {
        FROM: 'Alice',
        TO: 'Bob',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      };
      const result = messages.sanitizeMessage(expected);
      expect(result).to.eql(expected);
    });

    it('should sanitize a message with no TO property', () => {
      const expected = {
        FROM: 'Alice',
        TO: 'LinkedIn User',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      };
      const result = messages.sanitizeMessage({
        FROM: 'Alice',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      });
      expect(result).to.eql(expected);
    });

    it('should sanitize a message with no FROM property', () => {
      const expected = {
        FROM: 'LinkedIn User',
        TO: 'Alice',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      };
      const result = messages.sanitizeMessage({
        TO: 'Alice',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      });
      expect(result).to.eql(expected);
    });

    it('should sanitize a message with falsy TO property', () => {
      const expected = {
        FROM: 'Alice',
        TO: 'LinkedIn User',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      };
      const result = messages.sanitizeMessage({
        FROM: 'Alice',
        TO: '',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      });
      expect(result).to.eql(expected);
    });

    it('should sanitize a message with falsy FROM property', () => {
      const expected = {
        FROM: 'LinkedIn User',
        TO: 'Alice',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      };
      const result = messages.sanitizeMessage({
        FROM: '',
        TO: 'Alice',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      });
      expect(result).to.eql(expected);
    });
  });

  describe('getMessageEmitter', () => {
    it('should throw an error if falsy message parameter');

    it('should get message emitter', () => {
      const expected = 'Alice';
      const result = messages.getMessageEmitter({
        FROM: 'Alice',
        TO: 'LinkedIn User',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      });
      expect(result).to.eql(expected);
    });
  });

  describe('getUniqueMessagesEmitters', () => {
    it('should throw an error if falsy messages parameter');

    it('should get a set of messages emitters', () => {
      const msgs = [{
        FROM: 'Alice',
        TO: 'LinkedIn User',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      }, {
        FROM: 'Bob',
        TO: 'LinkedIn User',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      }, {
        FROM: 'Chuck',
        TO: 'LinkedIn User',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      }, {
        FROM: 'Chuck',
        TO: 'LinkedIn User',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      }, {
        FROM: 'Alice',
        TO: 'LinkedIn User',
        SUBJECT: 'Bananas',
        CONTENT: 'Bananas',
        DIRECTION: 'INCOMING',
        FOLDER: 'Archived'
      }];
      const expected = new Set(['Alice', 'Bob', 'Chuck']);
      const result = messages.getUniqueMessagesEmitters(msgs);
      expect(result).to.eql(expected);
    });
  });
});
