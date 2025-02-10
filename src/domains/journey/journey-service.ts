import { JourneyApi } from "./api/journey-api";

export class JourneyService {
  private journeyApi: JourneyApi;
  constructor() {
    this.journeyApi = new JourneyApi();
  }

  async getJourney() {
    const response = await this.journeyApi.myJourney();
    if (response.error) {
      throw response.error;
    }
    return response.data;
  }
}
