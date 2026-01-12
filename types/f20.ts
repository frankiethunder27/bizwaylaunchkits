export interface StartupProfile {
  id: string;
  company_name: string;
  industry: string;
  sub_industry?: string;
  stage: 'idea' | 'mvp' | 'seed' | 'seriesA' | 'seriesB+';

  metrics: {
    mrr?: number;
    arr?: number;
    customer_count?: number;
    cac?: number;
    ltv?: number;
    churn_rate?: number;
    growth_rate?: number;
  };

  product: {
    description: string;
    category: string;
    pricing_model: string;
    key_features: string[];
    unique_value_props: string[];
  };

  target_market: {
    segments: CustomerSegment[];
    geographic_focus: string[];
    company_size_focus: string[];
  };

  goals: {
    primary: 'acquisition' | 'revenue' | 'retention' | 'awareness';
    secondary?: string[];
    constraints?: string[];
  };

  created_at: Date;
  updated_at: Date;
}

export interface CustomerSegment {
  name: string;
  size_estimate?: number;
  pain_points: string[];
  decision_criteria: string[];
  budget_range?: { min: number; max: number };
  buying_process: string;
}

export interface GeneratedOffer {
  id: string;
  startup_id: string;
  version: number;

  content: {
    headline: string;
    subheadline?: string;
    description: string;
    value_propositions: string[];

    pricing: {
      regular_price: number;
      offer_price: number;
      discount_percentage?: number;
      payment_terms: string;
    };

    inclusions: OfferComponent[];
    exclusions?: string[];

    terms: {
      duration?: string;
      expiration_date?: Date;
      capacity_limit?: number;
      eligibility_criteria?: string[];
    };

    cta: {
      primary_text: string;
      secondary_text?: string;
      url: string;
    };
  };

  reasoning: {
    context_analysis: object;
    value_mapping: object;
    frame_strategy: object;
    expected_performance: PerformancePrediction;
  };

  performance: {
    views: number;
    clicks: number;
    conversions: number;
    ctr: number;
    conversion_rate: number;
    revenue_generated: number;
  };

  status: 'draft' | 'testing' | 'active' | 'paused' | 'archived';
  created_at: Date;
  updated_at: Date;
}

export interface OfferComponent {
  type: 'core_product' | 'bonus' | 'service' | 'access';
  name: string;
  description: string;
  perceived_value?: number;
  actual_cost?: number;
}

export interface PerformancePrediction {
  estimated_ctr: number;
  estimated_conversion_rate: number;
  confidence_interval: { low: number; high: number };
  key_assumptions: string[];
}
