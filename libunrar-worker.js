importScripts('libunrar.js')

onmessage = function(event) {
	const decodedContent = readRARContent([{
		name: event.data.filename,
		content: new Uint8Array(event.data.encodedBytesBuffer)
	}], event.data.password);
	postMessage(decodedContent);
}