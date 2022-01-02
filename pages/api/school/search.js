import fetch from 'node-fetch'
const baseUri = process.env.API_BASE_URI

const handler = async (req, res) => {
  try {
    const { page, query } = req.query
    const response = await fetch(query ? baseUri + '/schools/search?query=' + query + '&page=' + page : baseUri + '/schools/list?page=' + page, {
      method: 'GET'
    }).then(res => res.json())
    if (response.code !== 200) return res.status(500).json({ msg: '요청하신 응답을 처리할 수 없습니다' })
    res.status(200).json(response)
  } catch (e) {
    return res.status(500).json({ msg: '서버의 상태가 불안정합니다', err: e.message })
  }
}

export default handler
