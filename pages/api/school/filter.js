import fetch from 'node-fetch'
const baseUri = process.env.API_BASE_URI

// CAUTION: WIP!
const handler = async (req, res) => {
  try {
    const { page, region, gender,kind  } = req.query
    const response = await fetch(baseUri + '/schools/filter', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({page:page, region: region ? region : "", gender: gender ? gender : "", kind: kind? kind : ''})
    }).then(res => res.json())
    console.log(response)
    if (response.code !== 200) return res.status(500).json({ msg: '요청하신 응답을 처리할 수 없습니다' })
    res.status(200).json(response)
  } catch (e) {
    return res.status(500).json({ msg: '서버의 상태가 불안정합니다', err: e.message })
  }
}

export default handler
